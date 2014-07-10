function validateEmail(email) { 
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\ ".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA -Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
  return re.test(email);
}  

$(document).ready(function(){  
    
    // Datepicker 
     $('.datepicker').datepicker({ autoclose: true, todayHighlight: true }); 

    // Dropdown fix
    $('.switched .dropdown-menu li a').click(function(event){
      event.preventDefault();
      $(this).closest('.btn-group').find('.btn.btn-default.dropdown-toggle').html($(this).text()+ ' <span class="caret"></span>');  
    });


    
    $('#TransactionDetails').modal('hide');
    $('#ManageCurrencies').modal('hide');
    $('#AddFunds').modal('hide');
    $('#SendPayment').modal('hide');
    $('#RequestPayment').modal('hide');
    $('#ConvertMoney').modal('hide');
    $('#TravelMoney').modal('hide');
    
    // Send payment radio buttons action 
    $('#SendPayment #payment-steps-type  input').change(function(){ 

       if($(this).hasClass("request_payment")){
        $("#SendPayment .part-one").removeClass("hide");   
        $("#SendPayment .part-two").addClass("hide");  
       }
       else if($(this).hasClass("make_transfer")){
        $("#SendPayment .part-two").removeClass("hide");   
        $("#SendPayment .part-one").addClass("hide");  
       }

    });


    // Modal tooltip
    $('.pull-left.name').tooltip({placement: "top"});

    $("div#AddFunds .btn.btn-default.btn-warning.btn-styled.btn-orange.select-currency").click(function(){
       $("div#AddFunds .transaction-info, div#AddFunds .modal-footer").removeClass("hide");
    });

       
    $("div#TravelMoney .btn.btn-step-1").live('click', function(){ 
      $("div#TravelMoney .part-one").addClass("hide"); 
      $("div#TravelMoney .part-two").removeClass("hide"); 
      $(this).removeClass("btn-step-1").addClass("btn-step-2").text("Confirm");  
    });

    $("div#TravelMoney .btn.btn-step-2").live('click', function(){ 
      $("div#TravelMoney .well.well-summary.well-one").addClass("hide"); 
      $("div#TravelMoney .part-two .well-two").removeClass("hide");   
    });


    //  Convert money
    $("a#peer-to-peer-link").click(function(){
      $("#ConvertMoney .convert-peer-to-peer").removeClass("hide");
      $("#ConvertMoney .alert.alert-warning").addClass("hide"); 
      $("#ConvertMoney .convert-action .form-control").val("Peer-to-peer");
      $("#ConvertMoney .modal-footer .btn-block").text("REQUEST MATCH");
    });
    
    $("a#exchange-now-link").click(function(){  
      $("#ConvertMoney .convert-peer-to-peer").addClass("hide");
      $("#ConvertMoney .alert.alert-warning").removeClass("hide"); 
      $("#ConvertMoney .modal-footer .btn-block").text("CONVERT");
      $("#ConvertMoney .convert-action .form-control").val("Exchange Now!");
    });
    
    $("div#ConvertMoney .btn.btn-block").click(function(){
      $("div#ConvertMoney .modal-content .modal-body").empty().append("<div class='alert alert-success'>Success! You have converted <b>EUR 5000.00</b> to <b>GBP 6356.81.</b> .</div>"); 
      $("div#ConvertMoney .modal-footer .btn.btn-block").remove(); 
      $("div#ConvertMoney .modal-footer .hide").removeClass("hide"); 
      
    });
    
    $("div#AddContact .btn.btn-default.btn-warning.btn-styled.btn-orange").click(function(){
      var email = validateEmail($("div#AddContact #Email_validate").val());
      if(!email) {
        // alert('email cannot b empty');
        $("div#AddContact label.error.hide").removeClass("hide");       
        }
      else{
        // $("label.error").addClass("hide");       
        $("div#AddContact .transaction-info").empty();       
        $("div#AddContact .transaction-info").append("<div class='alert alert-success'>Success! You have added <b>Contact Name</b> as a contact.</div>");       
        $(this).text("Add Another");  
        // $(this).attr("data-dismiss","modal");  
        }
    });
    
    // Delete Contact
    $('.row.contacts-area .well .edit-area a.btn.dlt').on('click',function(){
        $(this).parent().parent().parent().remove();
    });
    
    // Add Currency
    $("#add_another_currency").click(function(){
        var count_of_select = $(this).parent().parent().find('select').length;
        count_of_select++;
        var select = $(this).parent().parent().find('select::first-child').clone();
        $(select).attr('name','curr' + count_of_select);
        $(select).find('option').removeAttr('selected');
        $(select).appendTo($(this).parent().parent().find('.btn-rows'));
        console.log();
    });
    
    // Delete Notification
    $('#notifications_btn ul li a').click(function(){
        var notifications_warning = $(this).parent().parent().parent().find('.glyphicon.glyphicon-top-bing span.label-warning');
        var count_of_notifications = parseInt($(notifications_warning).text());
        count_of_notifications--;
        if(count_of_notifications < 1){
            $(notifications_warning).remove();
        }else{
            $(notifications_warning).text(count_of_notifications);
        }
        if($('#notifications_btn ul li a').length === 1 ){
            $(this).parent().parent().remove();
        }else{
            $(this).parent().remove();
        }
    }); 
 
});