import axios from 'axios';
 
 class DeleteDog {
     deleteDogDetails(id) {
        axios.delete('http://localhost:4000/dogsBreed/deletedogs/' + id)
        .then(() => {
            console.log('Dog Deleted !!!')
            alert('Dog Deleted !!!')
           // this.props.history.push('/');
        })
        .catch((error) => {
            console.log(error)
            alert('Error While Fetching a record.. : ' + error)
        })
    }
 }
 
 export default DeleteDog;