import '../components/Report/report.scss';
import '../components/styles.scss';

import { QUERY_REPORT } from '../api/queries';
import { useQuery } from '@apollo/client';
import Parser from 'html-react-parser';

import ContentEditor from '../components/Report/ContentEditor';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';

//Renders a document that is stored on the database
//  requires an id passed through the route that links to the respective document
//  should also pass 'editable' property based on whether the user accessing the document is permitted or not
//  editable will be 'false' for viewers of 'published' versions of documents

// need a 'get' function that get's the target report to allow rendering in the 'content' section

const TipTap = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { reportId } = useParams();
  const { loading, data } = useQuery(QUERY_REPORT, {
    // pass URL parameter
    variables: { id: reportId },
  });
  console.log(data);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <h1 className="sectionHeader">{Parser(data.singleReport.title)}</h1>
      </div>
      <div>
        <h2 className="sectionHeader">Content</h2>
        <ContentEditor report={data.singleReport} />
      </div>
    </div>
  );
};

export default TipTap;
