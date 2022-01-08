import styled from 'styled-components'

export const Wrapper = styled.div`
    display : flex;
    align-items : flex-start; 
    width:100%;
  
`;

export const WrapperStatusCount = styled.div`
    display : flex;
    align-items : center; 
    
    justify-content : space-between;
    width:200px;

    div{
      text-align : center;
    }
`;

export const WrapperUserName = styled.div`
    display : flex;
    align-items : center; 
    justify-content : space-between;
    width:200px;
    margin-top:8px;
    a{
      color: blue;
      font-weight : bold;
      font-Size: 18px;
      text-decoration: underline;
    }

    a:visited{
      color: purple;
      font-weight : bold;
      font-Size: 18px;
      text-decoration: underline;
    }
  
`;

export const WrapperInfoUser = styled.div`
    display : flex;
    align-items : flex-start; 
    flex-direction: column;
    justify-content: space-between;
    margin-left : 8px;
    width:500px;
    height: 200px;
    h1 {
      font-size : 32px;
      font-weight : bold;
    }

    h3 {
      font-size : 18px;
      font-weight : bold;
    }

    h4 {
      font-size : 16px;
      font-weight : bold;
    }
    
`;


export const WrapperImg = styled.img`
    border-radius : 50%;
    width : 200px;
    height:200px;
    margin : 8px;
`;

