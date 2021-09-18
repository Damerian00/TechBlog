


  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete blog');
      }
    }
  };
  

  
  // document
  //   .querySelector('.blog-list')
  //   .addEventListener('click', delButtonHandler);
    let deleteButton = document
    .querySelectorAll('.blog-list');
    if (deleteButton){
      deleteButton.forEach(el => {
        
        el.addEventListener('click', delButtonHandler);
      });
    }