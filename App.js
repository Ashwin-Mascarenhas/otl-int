import { useEffect, useState } from 'react';
import MicrosoftAuth from './components/MicrosoftAuth'; 
import { useCookies } from 'react-cookie';
import './App.css';
import MailTable from './components/MailTable';
import EmailForm from './components/EmailForm';

function App() {

  // State for user data
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  
  // State for mail view
  const [showMail, setShowMail] = useState(false) 
  
  // State for authentication
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Cookies for session
  const [cookies, setCookie, removeCookie] = useCookies(['sessionId']);

  // Fetch user data on authentication
  const fetchdata = async () => {
    // API call to get user data
  }

  useEffect(() => {
    if (cookies['sessionId']) {
      fetchdata()
    }
  }, [])

  // Handle mail fetch
  const handleMails = async () => {
    // API call to get mails
  }

  return (
    <div className="app">
      
      {/* Outlook-style layout */}
      <header>
        <div className="toolbar">
          // Outlook toolbar
        </div>
      </header>
      
      <aside>
        // Outlook sidebar with folders
      </aside>
      
      <main>
      
        {/* Conditionally render view based on auth state */}
        {isAuthenticated ? 
          <InboxView 
            name={name} 
            mail={mail}
            onMailClick={handleMails} 
          /> :
          <LoginView
            onLogin={() => {}}  
          />
        }
        
      </main>
    </div>
  );
}

// Sub-components for views
const InboxView = ({name, mail, onMailClick}) => {
  
  // View when user is logged in
  
  return ( 
    <>
      <h3>Welcome, {name}</h3>
      <button onClick={onMailClick}>
        Open Inbox
      </button>
    </>
  )
}

const LoginView = ({onLogin}) => {

  // View with login button
  
  return (
    <MicrosoftAuth onLogin={onLogin} /> 
  )   
}

export default App;

// Kindly feel free to make any necessary changes if any -Ashwin