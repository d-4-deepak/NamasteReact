import { fireEvent, render,screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../mocks/mockResListData.json"
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : ()=> {
            return Promise.resolve(MOCK_DATA);
        }
    })
});


it("Should search res list for pizza text input",async ()=>{
    await act(async ()=>render(
        <BrowserRouter>
    <Body/>
    </BrowserRouter>)); 

    const searchBtn = screen.getByRole("button",{name:"Search"});

    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput,{target :{value:"pizza"}});
    fireEvent.click(searchBtn);
    const card = screen.getAllByTestId("resCard")
    // console.log(searchBtn);
    expect(card.length).toBe(1);
    
})

it("should filter the top rated restaurant ",async ()=>{
    await act(async ()=>render(
        <BrowserRouter>
    <Body/>
    </BrowserRouter>)); 

    const topRatedBtn = screen.getByRole("button",{name:"Top Rated Restaurants"});

  fireEvent.click(topRatedBtn);
  const topRatedRes = screen.getAllByTestId("resCard");
        expect(topRatedRes.length).toBe(4);
})