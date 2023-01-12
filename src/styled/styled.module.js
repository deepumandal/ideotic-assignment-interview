import styled from "styled-components";

export const Container = styled.div` 
//  mobile devices only
    @media only screen and (max-width: 420px) and (min-width: 0px){
    // border : 1px solid black;
    
}
// tablet  devices only

    @media only screen and (max-width: 1000px) and (min-width: 421px){
    // border : 1px solid blue;
    };

// laptop  devices only
    
    @media only screen and (max-width: 1400px) and (min-width: 1001px){
        // border : 1px solid red;

    }
    max-width: 1500px;
    margin: auto;
    margin-top : 6rem;
    // border: 1px solid teal;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap : 20px;,
    
`
// export constNavContainer = styled(Container)

// export const FixedContainer = styled(Container)`
// position: fixed;
// top : 0
// border: 1px solid black;
// `

export const FlexBox = styled.div` 
display : flex;
justify-content : space-between;
align-items: center;
margin: auto;
padding: 0.5rem 0px;



`