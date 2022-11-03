import styled from 'styled-components';
export const row = styled.div`
     position: relative;
     display:flex;
     @media (max-width: 767px) {
        display: inline-block;           
        }
`;
export const aboutbg = styled.div`
    background: #ff9800;
    padding: 10px;
`;
export const hed = styled.div`

    & h4{
        margin: 0;
        color: #fff;
        text-shadow: -3px -2px 5px #000;
    }
    & ul{
        margin:0;
        padding:0;
        display: flex;
    }
    & li{
        list-style:none;
        padding: 0px 3px 0 0px;
        color: #fff;
    }
    & a{
        text-decoration: none;
        color: #fff;
    }
`;

export const box = styled.div`
    padding:10px;
    background:#f3f0f0;
    &:hover{
        box-shadow: 0 5px 11px #ccc;
    }
`;
export const Service = styled.div`
    text-align: left;
`;

export const tabx = styled.div`
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
    margin-top: 30px;
    position: relative;
    padding-right: 15px;
    padding-left: 15px;    
    font-family: roboto;
    @media (max-width: 767px) {
        max-width: 100%;          
    } 
`;
export const tabx1 = styled.div`
    flex: 0 0 33.333333%;
    max-width: 33%;
    margin-top: 30px;
    position: relative;
    padding-right: 15px;
    padding-left: 15px;    
    font-family: roboto;
    @media (max-width: 767px) {
        max-width: 100%;          
    } 
`;

export const  sear = styled.div`
    background: #f4f1f1;
    width: 100%;
    padding: 10px;
    border-top: 2px solid #0ba2e8;
    margin-bottom:20px;
    & input{
        width: 100%; 
        height: 40px;
        border-radius: 0;
        padding: 7px 15px;
        border: 1px solid #ccc;
    }

    & ul{
        margin:0;
        padding:0;
    }
    & li{
        list-style:none;
        padding: 3px 0;
    }
    & a{
        color: #575555;
        text-decoration: none;
    }
    & .foter{
        border-top: 1px solid #ccc;
    }
`;
export const tabbox = styled.div`

    & .tablink{
        display:flex;
        background:#ecf7f9;
        margin-bottom: 12px;
    }
    & .nav-link{
        border-radius: 0;
        padding: 7px 30px;
        color: #000;
        font-family: roboto;
    }
    & .nav-item{
        border-right: 2px solid #fff;
    }
`;
// export const tablink = styled.ul``
