const inputname = document.querySelector('.inputName');
const inputAge = document.querySelector('.inputAge');
const btn = document.querySelector('.btn');
const namee = document.querySelector('.names')
const age = document.querySelector('.ages');
btn.addEventListener('click' , function(){
    function Calculater(name, dob){
        this.name= name;
        this.dateOfBirth= new Date(dob);
        this.calculateAge = function() {
                  const difference  = Date.now() - this.dateOfBirth.getTime()
                  const ageDate = new Date(difference)
                  return ageDate.getUTCFullYear() - 1970
              }
      }
      let inputnames = inputname.value
      let inputages= inputAge.value;
      const shafi = new Calculater(inputnames, inputages)
      namee.textContent =inputnames;
      age.textContent = shafi.calculateAge();
})