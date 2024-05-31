import styled from "styled-components";
 
export const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5% 2.5%;
    background: #037166;
    // position: absolute;
    bottom: 0;
    margin-top: 120px;
    height: 45px;
 
    @media (max-width: 1000px) {
        // padding: 70px 30px;
    }
`;
 
export const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-self: center;
    max-width: 1000px;
    margin: 0;
    height: 45px;
`;
 
 
export const Row = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px;
    margin-top: 10px;
    padding: 10px;
    height: 45px;
 
    @media (max-width: 1000px) {
        grid-template-columns: repeat(
            auto-fill,
            minmax(200px, 1fr)
        );
    }
`;
 
export const FooterLink = styled.a`
    color: #fff;
    font-size: 18px;
    text-decoration: none;
    height: 45px;
    padding: 5px;
    margin: 10px;
`;
 
