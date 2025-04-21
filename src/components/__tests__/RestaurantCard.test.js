import { render,screen } from "@testing-library/react"
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard"
import MOCK_DATA from "../mocks/resCardMock.json"
import RES_MOCK from  "../mocks/promotedMock.json";

import "@testing-library/jest-dom"

it("should render RestaurantCard component  along with props Data",()=>{
    render(<RestaurantCard resData={MOCK_DATA}/>)
   const name =  screen.getByText("Dev International");
    expect(name).toBeInTheDocument();
})
it("should render RestaurantCard component  along with promoted restaurant",()=>{
   const PromotedRes = withPromotedLabel(RestaurantCard);
   render(<PromotedRes resData={RES_MOCK}/>)
  const promoted = screen.getByText("Promoted");
  expect(promoted).toBeInTheDocument()

})