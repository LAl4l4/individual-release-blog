import { useState, useEffect } from 'react';
import './Profile.css';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../Variable/login';
import { useNavigate } from 'react-router-dom';
import { getUserProfile } from '../Variable/profile';


export default function Profile(){
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profile = useSelector(state => state.profile.userData);
  const profileError = useSelector(state => state.profile.error);

  const [bio, setBio] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  useEffect(() => {
    if (profile.bio) setBio(profile.bio);
    if (profile.birthday) setBirthday(profile.birthday);
    if (profile.gender) setGender(profile.gender);
  }, [profile]);

  //开发环境会跑两次报错，这个是react18的特性，不是代码错误
  useEffect(() => {
    if (profileError) {
      alert(`获取用户信息失败: ${profileError}`);
    }
  }, [profileError]);

  const [tab, setTab] = useState('info');

  function handleLogout(){
    dispatch(logOut());
    navigate('/');
  }

  return (
    <div className="profile-screen">
        <NavigateBar navigate={navigate} />

        <Profiles 
          bio={bio} setBio={setBio} 
          avatar={profile.avatar}
          birthday={birthday} setBirthday={setBirthday}
          gender={gender} setGender={setGender}
          handleLogout={handleLogout} tab={tab} setTab={setTab}
        />
    </div>
  );
}


function NavigateBar({ navigate }){
  return (
    <div>
        <div className="profile-header">
            <div className="back-arrow" onClick={()=> navigate(-1)} title="返回">←</div>
            <div className="profile-title-wrap">
            <h1 className="profile-title">个人资料</h1>
            <p className="profile-sub">管理你的账户信息</p>
            </div>
        </div>
    </div>
  );
}

function Profiles(
  { bio, setBio, avatar,
    birthday, setBirthday,
    gender, setGender,
    handleLogout, tab, setTab }
){
    return (
        <div className='infopart'>
            <LeftSection tab={tab} setTab={setTab} />

      <div className="rightsection">
                {tab === 'info' && (
                    <ProfileInfo
                        bio={bio}
                        setBio={setBio}
                        avatar={avatar}
                        birthday={birthday}
                        setBirthday={setBirthday}
                        gender={gender}
                        setGender={setGender}
                    />
                )}

                {tab === "email" && (
                    <EmailPassword
                        handleLogout={handleLogout}
                    />
                )}

                {tab === "others" && <OtherSettings />}
            </div>
        </div>
    );
}

function LeftSection({ tab, setTab }){
  return (
    <div className='leftsection'>
        <div className="left-section">
            <h2 
                className={"card-title" + (tab === 'info' ? " active" : "")}
                onClick={()=>setTab('info')}
            >基本信息</h2>
            <h2 
                className={"card-title" + (tab === 'email' ? " active" : "")}
                onClick={()=>setTab('email')}
            >密码/邮箱</h2>
            <h2 
                className={"card-title" + (tab === 'others' ? " active" : "")}
                onClick={()=>setTab('others')}
            >其他设置</h2>
        </div>
    </div>
  );
}

function ProfileInfo({ bio, setBio, avatar, birthday, setBirthday, gender, setGender }){
  return (
    <div className='contentsection right-inner'>
        <div className="card-block">
            <h3 className="section-title">基本信息</h3>
            <div className="field-stack">
                <div className="field-group">
                    <label className="field-label">Bio</label>
                    <textarea
                      value={bio || ''}
                      onChange={e=>setBio(e.target.value)}
                      placeholder="一句话介绍你自己"
                      className="field-input textarea"
                      rows={3}
                    />
                </div>

                <div className="field-group">
                    <label className="field-label">头像链接</label>
                    <input 
                      type="text" 
                      value={avatar || ''}
                      readOnly
                      className="field-input"
                    />
                </div>

                <div className="field-group">
                    <label className="field-label">生日</label>
                    <input 
                      type="date" 
                      value={birthday || ''}
                      onChange={e=>setBirthday(e.target.value)}
                      className="field-input"
                    />
                </div>

                <div className="field-group">
                    <label className="field-label">性别</label>
                    <select
                      value={gender || ''}
                      onChange={e=>setGender(e.target.value)}
                      className="field-input"
                    >
                      <option value="">请选择</option>
                      <option value="male">男</option>
                      <option value="female">女</option>
                      <option value="other">其他</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
  );
}

function EmailPassword({ handleLogout }){
  return (
    <div className="contentsection right-inner">
        <div className="card-block">
            <h3 className="section-title">密码 / 邮箱</h3>
      <div className="action-row">
        <button className="primary-btn">修改密码</button>
        <button className="ghost-btn">修改邮箱</button>
            </div>
        </div>

        <div className="card-block">
            <h3 className="section-title">账户</h3>
            <button className="logout-btn" onClick={handleLogout}>退出登录</button>
        </div>
    </div>
  );
}

function OtherSettings(){
  return (
    <div className="contentsection right-inner">
        <div className="card-block">
            <h3 className="section-title">其他设置</h3>
            <div className="decor-text">waitforit</div>
        </div>
    </div>
  );
}




