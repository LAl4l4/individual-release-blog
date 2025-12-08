import { useState } from 'react';
import './Profile.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserEmail, logOut } from '../Variable/login';
import { useNavigate } from 'react-router-dom';

export default function Profile(){
  const email = useSelector(selectUserEmail);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [displayName, setDisplayName] = useState('');
  const [bio, setBio] = useState('');
  const [pwd, setPwd] = useState('');
  const [newPwd, setNewPwd] = useState('');

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
          displayName={displayName} setDisplayName={setDisplayName}
          email={email} pwd={pwd} setPwd={setPwd} newPwd={newPwd} setNewPwd={setNewPwd}
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
    { bio, setBio, displayName, 
        setDisplayName, email, pwd, 
        setPwd, newPwd, setNewPwd, 
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
                        displayName={displayName}
                        setDisplayName={setDisplayName}
                    />
                )}

                {tab === "email" && (
                    <EmailPassword
                        email={email}
                        pwd={pwd}
                        setPwd={setPwd}
                        newPwd={newPwd}
                        setNewPwd={setNewPwd}
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

function ProfileInfo({ bio, setBio, displayName, setDisplayName }){
  return (
    <div className='contentsection'>
        <div className="field-group">
            <label className="field-label">显示名称</label>
            <input 
              type="text" 
              value={displayName} 
              onChange={e=>setDisplayName(e.target.value)} 
              placeholder="输入昵称" 
              className="field-input"
            />
            <span className="field-hint">将在博客中对其他人显示</span>
        </div>

        <div className="field-group">
            <label className="field-label">个人简介</label>
            <input 
              type="text" 
              value={bio} 
              onChange={e=>setBio(e.target.value)} 
              placeholder="一句话介绍你自己" 
              className="field-input"
            />
        </div>
    </div>
  );
}

function EmailPassword({ email, pwd, setPwd, newPwd, setNewPwd, handleLogout }){
  return (
    <div>
        
          <div className="field-group">
            <label className="field-label">邮箱</label>
            <input type="email" value={email} readOnly className="field-input" />
            <span className="field-hint">登录使用的邮箱地址</span>
          </div>
        

         
          <h2 className="card-title">修改密码</h2>
          <div className="field-group">
            <label className="field-label">当前密码</label>
            <input 
              type="password" 
              value={pwd} 
              onChange={e=>setPwd(e.target.value)} 
              placeholder="当前密码" 
              className="field-input"
            />
        

        <div className="field-group">
            <label className="field-label">新密码</label>
            <input 
              type="password" 
              value={newPwd} 
              onChange={e=>setNewPwd(e.target.value)} 
              placeholder="至少 6 位字符" 
              className="field-input"
            />
            </div>

            <button className="save-btn">保存修改</button>
        </div>

        <div className="profile-content">
           
            <button className="logout-btn" onClick={handleLogout}>退出登录</button>
            
        </div>
    </div>
  );
}

function OtherSettings(){
  return (
    <div>
        <h2>Wait for it</h2>
    </div>
  );
}


