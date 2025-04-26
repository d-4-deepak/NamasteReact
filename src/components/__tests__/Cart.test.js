import { act } from "react"
import RestaurantMenu from "../RestaurantMenu"
import MOCK_DATA from "../mocks/mockResMenu.json"
import { Provider } from "react-redux"
import { fireEvent } from "@testing-library/dom"
import appStore from "../../utils/appStore"
import { render,screen } from "@testing-library/react"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : ()=> {
            return Promise.resolve(MOCK_DATA);
        }
    })
});
beforeAll(() => {
    jest.clearAllMocks();
    console.clear(); // This clears console logs
  });
  
it("should load restaurant Menu Component",async ()=>{
        await act(async ()=>render(
            <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
        <RestaurantMenu/>
        </Provider>
        </BrowserRouter>))

        const accordianHeader = screen.getByText("Starters (North Indian) (7)");
        fireEvent.click(accordianHeader)
        expect(screen.getAllByTestId("foodItems").length).toBe(7);

        const btns = screen.getAllByRole("button",{name:"ADD+"});
            fireEvent.click(btns[0]);
        expect(screen.getByText("Cart(1)")).toBeInTheDocument();    
})

