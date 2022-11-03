import styled from 'styled-components';
export const row = styled.div`
     position: relative;
     display:flex;
     @media (max-width: 767px) {
        display: inline-block;           
        }
`;
export const foterbg = styled.div`
    background:#0ba2e8;
    border-top:4px solid #ff8400;
`;
export const fotbox = styled.div`
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
    color:#fff;

    & ul{
        margin:0;
        padding:0;
    }

    & li{
        list-style:none;
        line-height: 30px;
    }
    & a{
        text-decoration: none;
        color:#fff;
        font-weight: 400;
        font-size: 14px;
        font-family: roboto;

        &:hover{
            color:#ff8400;
            padding:0 0 0 7px;
            transition: all 0.9s;
        }
    }
    & svg{
        margin-right: 5px;
        font-size: 20px;
    }
`;

export const subbox = styled.div`
    
     & .send{
        background:#ff9800;
        color:#fff;
        text-decoration: none;
        padding: 8px 15px;
        &:active{
            background:#ff8400;
        }
        &:hover{
            background:#ff8400;
        }
     }
    & input{
        width: 100%;
        height: 45px;
        border-radius: 0;
        padding: 7px 15px;
        border: 1px solid #ccc;
        margin-bottom: 10px;
    }
`;
export const media = styled.div`

    & ul{
        display:flex;
        margin-top:15px;
    }

    & li{
        width:35px;
        height:35px;
        line-height:35px;
        text-align:center;
        margin:2px;
    }
    & svg{
        margin:0;
        font-size: 25px;
    }
    & .Facebook{
        background:#3B589C;
        &:hover{
            color:#ff8400;
        }
    }
    & .Twitter{
        background:#6dc0e8;
        color:#fff;

        &:hover{
            color:#ff8400;
        }
    }
    & .Instagram{
        background:#e84c4d;
        color:#fff;

        &:hover{
            color:#ff8400;
        }
    }
    & .Linkedin{
        background:#069ae8;
        color:#fff;

        &:hover{
            color:#ff8400;
        }
    }
    & .Youtube{
        background:#fe0000;
        color:#fff;

        &:hover{
            color:#ff8400;
        }
    }
    & .Rss{
        background:#f15200;
        color:#fff;

        &:hover{
            color:#ff8400;
        }
    }
`;