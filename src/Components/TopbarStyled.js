import styled from 'styled-components';

export const row = styled.div`
     position: relative;
     display:flex;
     @media (max-width: 767px) {
        display: inline-block;           
        }
`;

export const topmenu = styled.div`
    background:#0d6efd;
`;
export const leftmenu = styled.div`
    flex: 0 0 50%;
    max-width: 50%;
    position: relative;
    padding-right: 15px;
    padding-left: 15px;
    @media (max-width: 767px) {
        max-width: 100%;          
        }
    font-family: roboto;
    & ul{
        margin:0;
        padding:0;
        display:flex;
        @media (max-width: 767px) {
            display:block;        
        }
    }
    & li{
        list-style:none;
        padding: 7px 15px;
    }
    & a{
        text-decoration: none;
        color: #fff;
        font-family: roboto;
        &:hover{
            color: #fff;
        }
    }
    & span{
            padding-right:10px;
            color: #fff;
        }
`;
export const rightmenu = styled.div`
    flex: 0 0 50%;
    max-width: 50%;
    position: relative;
    padding-right: 15px;
    padding-left: 15px;
    @media (max-width: 767px) {
        max-width: 100%;          
        }
    font-family: roboto;

    & ul{
        margin:0;
        padding:0;
        display:flex;
        @media (max-width: 767px) {
            display:block;        
        }
    }
    & li{
        list-style:none;
        padding: 7px 15px;
    }
    & a{
        text-decoration: none;
        color: #fff;
        font-family: roboto;
        
        &:hover{
            color: #fff;
        }
        & span{
            padding-right:10px;
            color: #fff;
        }
    }
`;

export const login = styled.div`
    padding: 15px;
    box-shadow: 0px 0px 18px 0px #cccbcb;

    & .submit{
        padding: 6px 42px;
        margin-top: 30px;
    }

    & input{
        border:1px solid #ccc;
        border-radius: 0;

        &:focus{
            box-shadow: none;
            border: 1px solid #ccc;
            border-radius: 0;

        }
    }
    & label{
        font-family: roboto;
        font-weight: 400;
    }

    & h3{
        font-family: roboto;
        font-weight: 500;
        text-align: center;
        text-transform: uppercase;
        color: #064532;
        border-bottom: 3px solid #064532;
    }
    & sup{
        color:red;
        font-size: 21px;
        font-family: ui-rounded;
        position: relative;
        top: 1px;
    }
`;

export const showDateStayle = styled.div`
    background: #d9e3f3;
    color: #060606;
    display: flex;
    margin-top: 15px;

    & p{
        padding: 6px 11px;
        margin: 0;
        border-right: 1px solid #ccc;
    }
`;

export const NavItem = styled.div`
    width: 50%;
    text-align: center;

    & .nav-link{
        border-radius: 0;
        background: #d9e3f3;
        color: #000;
        font-weight: 500;
    }
    
    
`;
export const NavTab = styled.div`
    display: flex;
    
`;
