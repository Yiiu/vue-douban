export default (router) =>{
    router.map({
        "/":{
            name :'index',
            component: (resolve)=> {
                require(["./view/home"],resolve)
            }
        },
        '/details/:id': {
            name: 'details', 
            component: (resolve)=> {
                require(["./view/details"],resolve)
            }
        }
    })
}