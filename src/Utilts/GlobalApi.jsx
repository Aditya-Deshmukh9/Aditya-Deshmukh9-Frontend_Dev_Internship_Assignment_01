import axios from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BASEURL,
});

const RecommendedEvents = (page) =>
  axiosClient.get(
    `?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${page}&type=reco`
  );

const upcomingEvents = (page) =>
  axiosClient.get(
    `?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${page}&type=upcoming`
  );

export default { RecommendedEvents, upcomingEvents };
