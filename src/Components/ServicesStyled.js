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

export const Service = styled.div`
    text-align: center;
`;
export const box = styled.div`
    padding:10px;
    background:#f3f0f0;
    &:hover{
        box-shadow: 0 5px 11px #ccc;
    }
`;
export const servicbox = styled.div`
    flex: 0 0 33.3333%;
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
export const servictext = styled.div`
        text-align: center;

        & svg{
            font-size:44px;
            color:#0ba2e8;
        }
`;
// export const servicbox = styled.div`

// `;
// export const servicbox = styled.div`

// `;
// export const servicbox = styled.div`

// `;
// export const servicbox = styled.div`

// `;
// export const servicbox = styled.div`

// `;
// export const servicbox = styled.div`

// `;
// export const servicbox = styled.div`

// `;