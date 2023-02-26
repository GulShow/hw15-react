import logo from './logo.svg';
import './App.css';
import MarkdownEditor from './components/MarkdownEditor';

function App() {
  const handleContentChange = (content) => {
    console.log('Content changed:', content);
  };
  return (
    <div className="App">
    <MarkdownEditor initialValue="Hello world" onContentChange={handleContentChange}/>
    </div>
  );
}

export default App;
