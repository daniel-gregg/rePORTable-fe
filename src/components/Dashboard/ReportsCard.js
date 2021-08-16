import { Link } from 'react-router-dom';
import Parser from 'html-react-parser';
import { REMOVE_REPORT } from '../../api/mutations';
import { useMutation } from '@apollo/client';
import { EventSeat } from '@material-ui/icons';

const ReportsCard = ({ report }) => {
  //do some stuff with report here
  console.log(report);
  const [removeReport] = useMutation(REMOVE_REPORT);

  const deleteReport = (event) => {
    event.preventDefault();
    console.log(report._id);
    let reportId = report._id;
    removeReport({ variables: { reportId: reportId } });
    window.location.assign('#/dashboard');
  };

  return (
    <Link to={`/reportdashboard/${report._id}`} className="relative">
      <div className="rounded overflow-hidden shadow-lg p-6">
        <p className="font-bold text-blue-900 text-center font-extrabold text-2xl">{Parser(report.title)}</p>
        <p className="text-gray-500 text-sm text-center">{Parser(report.synopsis)}</p>
      </div>
      <button
        id={report._id}
        className="absolute top-0 right-0 bg-white text-red-500 p-2 rounded hover:bg-red-200 m-2"
        onClick={(event) => deleteReport(event)}
      >
        X
      </button>
    </Link>
  );
};

export default ReportsCard;
