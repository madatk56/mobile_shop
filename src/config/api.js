module.exports={
    ROOT_API : {
       HOMEPAGE: "/", 
       PRODUCTS: "/products",
       LOGIN:"/login"
    },
    PRODUCT: {
        getAllProducts: "/all",
        getProductByID: "/:ID",
        getProductByUpdateYear: "/year/:date",
        getProductByUpdateMonth: "/:date"
    },
    LOGIN:{
        signIn:"/sign-in",
        createAccount:"/create-account"
    }
}