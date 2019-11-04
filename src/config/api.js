module.exports={
    ROOT_API : {
       HOMEPAGE: "/", 
       PRODUCTS: "/products",
       ROOT_ORDER:"/order"
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
    },
    Mail:{
        sendMail:"/mail"
    },
    ORDER:{
        insertOrder:"/insert"
    }
}