import '../components/Report/report.scss';
import '../components/styles.scss';

import { QUERY_NO_CONTENT, QUERY_REPORT } from '../api/queries';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import TitleEditor from '../components/Report/TitleEditor';
import SynopsisEditor from '../components/Report/SynopsisEditor';
import ContributorCard from '../components/ReportDashboard/ContributorCard';
import ContributorSearch from '../components/ReportDashboard/ContributorSearch';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';

//Renders a document that is stored on the database
//  requires an id passed through the route that links to the respective document
//  should also pass 'editable' property based on whether the user accessing the document is permitted or not
//  editable will be 'false' for viewers of 'published' versions of documents

// need a 'get' function that get's the target report to allow rendering in the 'content' section

const CreateDashboard = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { reportId } = useParams();
  const { loading, error, data } = useQuery(QUERY_NO_CONTENT, {
    // pass URL parameter
    variables: { id: reportId },
  });
  console.log(data);

  if (loading) {
    return <div>Loading...</div>;
  }

  let report = data.singlePartial;

  //Need to add in a 'cancel' button that deletes the report instance from the db (abort create report)

  return (
    <div>
      <div>
        <h2 className="sectionHeader">Title</h2>
        <TitleEditor report={report} editable={true} />
      </div>
      <div>
        <h2 className="sectionHeader">Synopsis</h2>
        <SynopsisEditor report={report} editable={true} />
      </div>
      <div className="flex justify-center w-full">
        <h2 className="sectionHeader">Contributors</h2>
      </div>
      <div className="flex justify-center w-full">
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {/* add conditional rendering here */}
          {report.contributors.map((author) => {
            return <ContributorCard member={author} key={author._id} />;
          })}
        </div>
      </div>

      <ContributorSearch reportId={report._id} />

      <div className="flex justify-center w-full">
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          <Link to={`/document/${report._id}`}>
            <div className="floatingButton">Edit</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateDashboard;
