import { fireEvent, render,screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router"
import "@testing-library/jest-dom"

describe("Header component testing",()=>{
    it("should load login  with header",()=>{
        render(
            <BrowserRouter>
            <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
    )
    const loginBtn = screen.getByRole("button");
    // const loginBtn = screen.getByText("Login");
    expect(loginBtn).toBeInTheDocument();

 

    })
    it("should load cart  with header",()=>{
        render(
            <BrowserRouter>
            <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
    )
    const cartItems = screen.getByText(/Cart/);
    expect(cartItems).toBeInTheDocument();

 

    })
    it("should load cart items with 0   with header",()=>{
        render(
            <BrowserRouter>
            <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
    )
    const cartItems = screen.getByText("Cart(0)");
    expect(cartItems).toBeInTheDocument();

 

    })
    it("should change login button to logout on click",()=>{
        render(
            <BrowserRouter>
            <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
    )
    const loginBtn = screen.getByRole("button");
    fireEvent.click(loginBtn);
    const logoutBtn =screen.getByRole("button")
    expect(logoutBtn).toBeInTheDocument();


 

    })
})