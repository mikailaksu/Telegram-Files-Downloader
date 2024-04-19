var divElements = document.querySelectorAll('div.document.ext-rar.search-super-item');  //rar yazan kısmı zip olarak değiştirebilirsiniz.
 
Array.prototype.forEach.call(divElements, function(divElement, index) { 
  setTimeout(function() { 
    divElement.click(); 
  }, index * 5000); // Her bir tıklama için 5000 ms (5 saniye) gecikme 
});
