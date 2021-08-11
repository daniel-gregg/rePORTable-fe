const reportsCard = (report) => {
  //do some stuff with report here
  console.log(report);
  return (
    <div class="rounded overflow-hidden shadow-lg ">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{report.report.title}</div>
        <p class="text-gray-700 text-base">{report.report.content}</p>
      </div>
    </div>
  );
};

export default reportsCard;
