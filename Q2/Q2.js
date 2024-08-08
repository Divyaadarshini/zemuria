 /* 2. Implement a global toast notification system
(comprising of success, warning and error notifications) 
that can be used across multiple pages (25 Minutes) */

function createToast(){
    const container = document.createElement('div')
    container.id = "toast-container"
    document.body.appendChild(container);
}

function displayToast(msg, type){
    const container = document.getElementById('toast-container')
    const toast = document.createElement('div');
    toast.classList.add('toast', type);
    toast.innerText = msg;
    container.appendChild(toast);

    setTimeout(()=>{
        toast.classList.add('show');
    }, 100);

    setTimeout(()=>{
        toast.classList.remove('show');
        setTimeout(()=>{
            container.removeChild(toast);
        },300)
    }, 2000);
}
    function successMsg(msg){
        displayToast(msg, 'success');
    }
    function warningMsg(msg){
        displayToast(msg, 'warning');
    }
    function errorMsg(msg){
        displayToast(msg, 'error');
    }

    createToast();
