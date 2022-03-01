export async function getGallery() {
   try {
		// get the data from the api
      var API_KEY = '25906513-a347e26cf42cf2735b3ba5622';
      const url="https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('red roses');
      const data=await fetch(url);
		// convert data to json
      const response = await data.json();
		return response;
   } catch (error) {
      console.log('error...',error);
   }
}
