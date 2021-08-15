import { Link } from 'react-router-dom';
import Parser from 'html-react-parser';

const reportsCard = ({ report }) => {
  //do some stuff with report here
  console.log(report);
  return (
    <Link to={`/reportdashboard/${report._id}`}>
      <div className="rounded overflow-hidden shadow-lg p-6">
        <p className="font-bold text-blue-900 text-center font-extrabold text-2xl">{Parser(report.title)}</p>
        <p className="text-gray-500 text-sm text-center">{Parser(report.synopsis)}</p>
      </div>
    </Link>
  );
};

export default reportsCard;
