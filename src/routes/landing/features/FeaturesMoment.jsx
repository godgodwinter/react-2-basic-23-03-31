import moment from "moment/moment";
export default function FeaturesToast() {
  const tgl = moment().format("MMMM Do YYYY, h:mm:ss a");
  return (
    <>
      <p>{tgl}</p>
    </>
  );
}
