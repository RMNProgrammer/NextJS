let WINDOW = {
   document: {
      location: {

      }
   },
   localStorage:{
      getItem: () => {},
      setItem: () => {},
   }
}

if (typeof window !== 'undefined') { WINDOW = window }

export default WINDOW
