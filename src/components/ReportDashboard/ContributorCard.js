import { useMutation } from '@apollo/client';
import { REMOVE_CONTRIBUTOR } from '../../api/mutations';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';

const ContributorCard = (member) => {
  //render team members as a card
  console.log(member);
  const [removeContributor] = useMutation(REMOVE_CONTRIBUTOR);

  const { reportId } = useParams(); //this can be used to add to the add/remove contributors mutations

  const deleteContributor = () => {
    console.log(member.member._id);
    removeContributor({ variables: { reportId: reportId, personId: member.member._id } });
  };

  return (
    <div className="rounded overflow-hidden shadow-lg py-4 px-2" id={member.member._id}>
      <div className="relative">
        <p className="font-bold text-blue-900 text-center justify-content-center font-extrabold text-xl pr-10">{`${member.member.designation} ${member.member.firstName} 
        ${member.member.lastName}`}</p>
        <button
          id={member.member._id}
          className="absolute top-0 right-0 bg-white text-red-500 p-2 rounded hover:bg-red-200 m-2"
          onClick={deleteContributor}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default ContributorCard;
