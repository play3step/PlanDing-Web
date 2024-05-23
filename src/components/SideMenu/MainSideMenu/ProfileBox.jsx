import { useSelector } from 'react-redux'
import styled from 'styled-components'
import LogoutBtn from './atom/LogoutBtn'

const ProfileBox = () => {
  const userInfo = useSelector(state => state.users.user)
  console.log(userInfo)

  return (
    <Container>
      <InfoBox>
        <ProfileImage
          src={userInfo.profileImage}
          alt="사용자 프로필"
        />
        <UserName>{userInfo.userName}</UserName>
        <UserCode>{userInfo.code ?? '#xxxx'}</UserCode>
        <LogoutBtn />
      </InfoBox>
    </Container>
  )
}
export default ProfileBox

const Container = styled.div`
  width: 20.833333333333336vw;
  height: 12.962962962962962vh;
  background-color: #fbfbfb;
  padding: 1.0416666666666665vw;
`
const InfoBox = styled.div`
  display: flex;
  align-items: center;
`

const ProfileImage = styled.img`
  width: 2.7083333333333335vw;
  height: 2.7083333333333335vw;
  border-radius: 50%;
`

const UserName = styled.p`
  font-size: 0.9375vw;
  margin-left: 1vw;
`
const UserCode = styled.p`
  font-size: 0.8333333333333334vw;
  margin-left: 0.4vw;
`
