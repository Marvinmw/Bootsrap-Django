 $(document).ready(function(){
    var method='default'
    //methods

       $('#methodlist li a.methods').click(function(){
             method=$(this).text();
             switch (method){
                case "METHOD 1":
                    createform1();
                break;

                case "METHOD 2":
                    createform2();
                break;

             }
       });


        function createform1(){
            $("#inputform").remove();
            form = $("<form></form>");
            form.attr("id","inputform");
            div1=createinput("p1");
            div2=createinput("p2");
            but=createbutton();
            form.append(div1);
            form.append(div2);
            form.append(but);
            form.appendTo('#formdiv');
            form.submit();
            form.show();
        }

         function createform2(){
            $("#inputform").remove();
            form = $("<form></form>");
            form.attr("id","inputform");
            div1=createinput("p1");
            div2=createinput("p2");
            div3=createinput("p3");
            div4=createinput("p4");
            div5=createinput("p5");
            but=createbutton();
            form.append(div1);
            form.append(div2);
            form.append(div3);
            form.append(div4);
            form.append(div5);
            form.append(but);
            form.appendTo('#formdiv');
            form.submit();
            form.show();
        }




        function createinput(inputname){
            div=$("<div></div>");
            div.attr("class","form-group row");
            label=$("<label></label>");
            label.attr("for","parameters");
            label.attr("class","col-sm-2 form-control-label");
            label.text(inputname);
            div.append(label);

            innerdiv=$("<div></div>");
            innerdiv.attr("class","col-xs-4");
            inputfield=$("<input type='number' class='form-control' step='0.000001' size='10'>");
            inputfield.attr("id",inputname);
            innerdiv.append(inputfield);

            div.append(innerdiv);
            return div;


        }

        function createbutton(){
            div=$("<div class='form-group row'> <div class='col-sm-offset-2 col-sm-10'><button  type='submit' class='btn btn-secondary' id='submit'>Submit</button></div></div>");
            return div;
        }

            // AJAX POST
       $('#submit').click(function(){
         var parameters={};
         var inpu=$("input");
         var label=$("label");
         for(i=0;i<inpu.length;i++){
            parameters[label[i].innerHTML]=inpu[i].value;
         }
         var img=$(".carousel-indicators li.active").index();
         $.ajax({
            type: "POST",
            url: "/app/dealimg/",
            dataType: "json",
            data: { "parameters": parameters,"img":img },
            success: function(data) {
                alert(data.message);
                $("#imgshow").show();
            }
        });

    });


// CSRF code
    function getCookie(name) {
        var cookieValue = null;
        var i = 0;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (i; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    var csrftoken = getCookie('csrftoken');

    function csrfSafeMethod(method) {
        // these HTTP methods do not require CSRF protection
        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
    }
    $.ajaxSetup({
        crossDomain: false, // obviates need for sameOrigin test
        beforeSend: function(xhr, settings) {
            if (!csrfSafeMethod(settings.type)) {
                xhr.setRequestHeader("X-CSRFToken", csrftoken);
            }
        }
    }); 






      });

