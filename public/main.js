async function init(){
  let rustApp = null;
  try {
    rustApp = await import('../pkg')
  } catch (e){
    console.error(e)
    return;
  }

  console.log(rustApp);

  const input = document.getElementById('upload');
  const fileReader = new FileReader();

  fileReader.onload = () => {
    let base64 = fileReader.result.replace(/^data:image\/(png|jpeg|jpg);base64,/,'');
    const converted_image = rustApp.grayscale(base64);
    document.getElementById('new-img').setAttribute('src', converted_image)
  }
  input.addEventListener('change', ()=>{
    fileReader.readAsDataURL(input.files[0]);
  })
}
init();