import { Reader } from './Reader/Reader';
import publications from './publications.json';

export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      {/* React homework template */}
      <Reader
        items={publications}
      />
    </div>
  );
};
