import axios from "axios";

// Provider order:
// 1) REACT_APP_F1_API_BASE if provided (configure your own provider here)
// 2) Community mirror (non-Ergast host)
// 3) Ergast original (last resort)
const envBase = (process.env.REACT_APP_F1_API_BASE || "").replace(/\/$/, "");
const API_BASES = [
  envBase || null,
  "https://api.jolpi.ca/ergast/f1",
  "https://ergast.com/api/f1",
].filter(Boolean);

const limit = 100;

// Generic GET that tries primary then fallback
const getFromApis = async (relativePath, config = {}) => {
  let lastError;
  for (const base of API_BASES) {
    try {
      const response = await axios.get(`${base}${relativePath}`, {
        timeout: 15000,
        headers: { Accept: "application/json" },
        ...config,
      });
      // Basic sanity check
      if (response && response.data) return response;
      lastError = new Error("Empty response data");
    } catch (err) {
      lastError = err;
      // Try next base
      // console.warn(`API call failed for ${base}${relativePath}:`, err?.message || err);
    }
  }
  throw lastError;
};

export const getSeasons = async () => {
  try {
    const response = await getFromApis(`/seasons.json?limit=${limit}`);
    const seasonsData = response.data.MRData.SeasonTable.Seasons;
    return seasonsData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getOneSeason = async (year) => {
  try {
    const response = await getFromApis(`/${year}.json`);
    const seasonData = response.data.MRData.RaceTable;
    return seasonData;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getCurrentSeason = async () => {
  try {
    const response = await getFromApis(`/current.json`);
    const seasonData = response.data.MRData.RaceTable;
    return seasonData;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getDriverStandings = async (year) => {
  try {
    const response = await getFromApis(`/${year}/driverStandings.json`);
    const standingsData = response.data.MRData.StandingsTable.StandingsLists;
    return standingsData;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getDriverStandingsPerRace = async (year, raceId) => {
  try {
    const response = await getFromApis(
      `/${year}/${raceId}/driverStandings.json`
    );
    const standingsData = response.data.MRData.StandingsTable.StandingsLists;
    return standingsData;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getConstructorStandings = async (year) => {
  try {
    const response = await getFromApis(`/${year}/constructorStandings.json`);
    const standingsData = response.data.MRData.StandingsTable.StandingsLists;
    return standingsData;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getConstructorStandingsPerRace = async (year, raceId) => {
  try {
    const response = await getFromApis(
      `/${year}/${raceId}/constructorStandings.json`
    );
    const standingsData = response.data.MRData.StandingsTable.StandingsLists;
    console.log(standingsData);
    return standingsData;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getQualyResult = async (year, raceId) => {
  try {
    const response = await getFromApis(`/${year}/${raceId}/qualifying.json`);
    const qualyData = response.data.MRData.RaceTable.Races;
    console.log(qualyData);
    return qualyData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getRaceResult = async (year, raceId) => {
  try {
    const response = await getFromApis(`/${year}/${raceId}/results.json`);
    const raceData = response.data.MRData.RaceTable.Races;
    console.log(raceData);
    return raceData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getNextRace = async () => {
  try {
    const response = await getFromApis(`/current/next.json`);
    const raceData = response.data.MRData.RaceTable.Races?.[0] || null;
    return raceData;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
