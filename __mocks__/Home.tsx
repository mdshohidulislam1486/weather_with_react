 

   const handleSearch = () => {
       return Promise.resolve({name:'Bangladesh'})
    
    /* const url = `https://restcountries.com/v3.1/name/${search}`
          fetch(url)
          .then(res => res.json())
          .then(data => {
            if(data.length>0){
              setCountries(data)
            }
            else{
              setError(true)
              setCountries([])
              return
            }
          })
          setError(false) */
   } 

   const loadName = () => {
       return handleSearch().then(extractData =>{
           const name = extractData.name;
            return name
       })
   }


   const printName = () =>{
        loadName().then(name => {
            console.log(name)
            return name;
        })
   }

   exports.printName = loadName;