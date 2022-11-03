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
export const portbox = styled.div`
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
export const portfobox = styled.div`
     flex: 0 0 25%;
    max-width: 25%;
    margin-top: 30px;
    position: relative;
    padding-right: 15px;
    padding-left: 15px;    
    font-family: roboto;
    @media (max-width: 767px) {
        max-width: 100%;          
    } 
`;
export const porimg = styled.div`
    position: relative;
    overflow: hidden;
    & img{
        width:100%;
        transition: transform .2s;
        transition: all 0.6s ease-out;
        &:hover{
            transform: scale(1.5);
            transition: all 0.4s ease-out;
        }
    }
    & .porticon{
        position: absolute;
        top: -30%;
        left: 30%;
        transition: all 0.6s ease-out;

        & ul{
            margin:0;
            padding:0;
            display:flex;
        }
        & li{
            list-style: none;
            width: 40px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            background: #fff;
            margin: 5px;
            color: #ff8400;
            border: 1px solid #ff8400;

            & svg{                
                 font-size: 16px;
            }
        }            
    }
    & .porttext{
            position: absolute;
            bottom: -57px;
            left: 5%;
            color:#fff;
            transition: all 0.6s ease-out;
        } 
    & .skill{
        position: relative;
        text-align: center;
        left: 10%;
        top: -3px;
            & ul{
                margin:0;
                padding:0;
                display:flex;
            }
            & li{
                list-style: none;
                padding-right: 10px;
            }
            & a{
                text-decoration:none;
                color:#fff;
            }
        } 

        & .over{
            position: absolute;
            top: 0;
            left: 0;
            background: #00000054;
            bottom: 0;
            right: 0;
        } 

        &:hover .porttext{
            bottom: 5px;
            transition: all 0.4s ease-out;
        }
        &:hover .porticon{
            top: 20%;
            transition: all 0.4s ease-out;
        }
    
`;
export const fotbtn = styled.div`
    text-align: center;
    & .submit{
        background: #0ba2e8;
        border-radius: 0;
        color: #fff !important;
        margin: 15px auto;

        &:active {
            background: #02567d;
            color: #fff !important;
        }
    }
`;

