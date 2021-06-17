function imahmoudi_safer(value) {
 
    
 const str = value.split('');
 str.forEach((item, index) => {
  const charCode = item.charCodeAt(0);
  if (charCode === 32 || charCode === 8204) {
    str[index] = '';
  }
 });
 value = str.join('');
 return value.replace(/\s/g, "") ;
  
}
