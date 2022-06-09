import styled from "styled-components";
import logo from "../images/logo.png";
import Button from "../components/button.js";
import profileimg from "../images/제경모.jpg";
import { useStore, useStoreTemp, useUserinfo } from "../zustand/store";
import axios from "axios";
import { Link } from "react-router-dom";

const HeadDiv = styled.div`
  box-sizing: border-box;
  margin: 0;
  display: flex;
  justify-content: space-between;
  padding: 5px 15px;
  width: 100vw;
`;

const Logoimage = styled.img.attrs({
  src: `${logo}`,
})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
  width: 17vw;
  height: 17vw;
`;
const MyProFileImg = styled.img.attrs({
  src: `${profileimg}`,
})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 10vw;
  height: 10vw;
  border-radius: 99px;
  padding: 0 0 0 0px;
`;
const UserNickName = styled.span`
  font-size: 3vw;
`;
const RightContainer = styled.div`
  /* background-color: blue; */
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

const MyprofileContainer = styled.div`
  display: flex;
  gap: 5vw;
  align-items: center;
  padding-right: 2vw;
`;
const Btndiv = styled.div`
  /* background-color: red; */
  display: flex;
  padding: 0px;
  gap: 2vw;
  margin-top: 2vw;
  .headerBtn {
    font-size: 3vw;
    width: 17vw;
  }

  .link {
    text-decoration: none;
  }
`;

const Header = (props) => {
  const { openLoginModal, openSignupModal, islogin } = useStore();
  const { nickname } = useUserinfo();

  const getuserinfo = async () => {
    await axios
      .get("http://localhost:3500/user/auth", {
        headers: {
          authorization: "asdfas",
        },
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <>
      {islogin === false ? (
        <HeadDiv>
          <Logoimage />
          <RightContainer>
            <Btndiv>
              <Button className="headerBtn" onClick={openLoginModal}>
                로그인
              </Button>
              <Button className="headerBtn" onClick={openSignupModal}>
                회원가입
              </Button>
            </Btndiv>
          </RightContainer>
        </HeadDiv>
      ) : (
        <HeadDiv>
          <Link to="/">
            <Logoimage />
          </Link>
          <RightContainer>
            <MyprofileContainer>
              <MyProFileImg />
              <UserNickName>{nickname}</UserNickName>
            </MyprofileContainer>
            <Btndiv>
              <Button className="headerBtn" onClick={props.openModalHandler}>
                로그아웃
              </Button>
              <Link to="/mypage" className="link">
                <Button className="headerBtn" onClick={getuserinfo}>
                  마이페이지
                </Button>
              </Link>
            </Btndiv>
          </RightContainer>
        </HeadDiv>
      )}
    </>
  );
};

export default Header;
