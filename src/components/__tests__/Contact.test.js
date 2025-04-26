import { render,screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"


describe("Contact us page test cases",()=>{

    beforeAll(()=>{
      console.log("Before All");
      
    })
    beforeEach(()=>{
      console.log("before each");
      
    })
    afterAll(()=>{
      console.log("afterAll");
      
    })
    afterEach(()=>{
      console.log("after each");
      
    })

    test("component Contact should load heading",()=>{
        render(<Contact/>)
    
        const heading = screen.getByRole("heading");
      expect(heading).toBeInTheDocument();
    })
    
    test("component Contact should load button",()=>{
        render(<Contact/>)
    
        const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
    })
    
    it("component Contact should load Submit",()=>{
        render(<Contact/>)
    
        const Submit = screen.getByText("Submit");
      expect(Submit).toBeInTheDocument();
    })
    
    test("component Contact should load input boxes",()=>{
        render(<Contact/>)
        //Querying
        const inputBoxes = screen.getAllByRole("textbox");
        // console.log(inputBoxes);
        //Assertion
       expect(inputBoxes.length).toBe(2);
    })
})


