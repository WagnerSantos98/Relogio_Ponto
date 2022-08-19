
  
  function getEmployees() 
  {
  
  google.script.run.withSuccessHandler(function(ar) 
  {
  var employeeSelect = document.getElementById("employee");
  console.log(ar);
  
  let option = document.createElement("option");
  option.value = "";
  option.text = "";
  employeeSelect.appendChild(option);
  
  ar.forEach(function(item, index) 
  {    
    let option = document.createElement("option");
    var employee = item[0];
    option.value = item[0];
    option.text = item[0];
    employeeSelect.appendChild(option);    
  });
  }).getEmployees();
  
  };
  
  function ClockIn()
  {
  
  $('#message').html("");
  var employee = document.getElementById("employee").value;
  
  if(employee != '')
  {
  
  google.script.run.withSuccessHandler(function(ar) 
  {
   console.log(ar);
  ar.forEach(function(item, index) 
  {
  
  if(item[0] == 'SUCCESS')
  {
  var message = item[2] + ' Entrada registrada: ' + item[1];
  $('#message').html(message);
  document.getElementById("message").className = "alert alert-primary";
  }
  else
  {
  var message = item[2] + ' ' + item[0];
  $('#message').html(message);
  document.getElementById("message").className = "alert alert-warning"; 
  }
  
   
  });
  
  }).clockIn(employee);
  
  }
  }

      
  function ClockOut()
  {
  
  $('#message').html("");
  var employee = document.getElementById("employee").value;
  
  if(employee != '')
  {
  
  google.script.run.withSuccessHandler(function(ar) 
  {
  console.log(ar);
  ar.forEach(function(item, index) 
  {
  
  if(item[0] == 'SUCCESS')
  {
  var message = item[2] + ' Saída registrada: ' + item[1];
  $('#message').html(message);
  document.getElementById("message").className = "alert alert-primary";
  }
  else
  {
  var message = item[2] + ' ' + item[0];
  $('#message').html(message);
  document.getElementById("message").className = "alert alert-warning"; 
  }
      
  });
  
  }).clockOut(employee);
  
  }
  }

  function ClockRet()
  {
  
  $('#message').html("");
  var employee = document.getElementById("employee").value;
  
  if(employee != '')
  {
  
  google.script.run.withSuccessHandler(function(ar) 
  {
  console.log(ar);
  ar.forEach(function(item, index) 
  {
  
  if(item[0] == 'SUCCESS')
  {
  var message = item[2] + ' Saída registrada: ' + item[1];
  $('#message').html(message);
  document.getElementById("message").className = "alert alert-primary";
  }
  else
  {
  var message = item[2] + ' ' + item[0];
  $('#message').html(message);
  document.getElementById("message").className = "alert alert-warning"; 
  }
      
  });
  
  }).clockRet(employee);
  
  }
  }

  function ClockExit()
  {
  
  $('#message').html("");
  var employee = document.getElementById("employee").value;
  
  if(employee != '')
  {
  
  google.script.run.withSuccessHandler(function(ar) 
  {
  console.log(ar);
  ar.forEach(function(item, index) 
  {
  
  if(item[0] == 'SUCCESS')
  {
  var message = item[2] + ' Saída registrada: ' + item[1];
  $('#message').html(message);
  document.getElementById("message").className = "alert alert-primary";
  }
  else
  {
  var message = item[2] + ' ' + item[0];
  $('#message').html(message);
  document.getElementById("message").className = "alert alert-warning"; 
  }
      
  });
  
  }).clockExit(employee);
  
  }
  }
