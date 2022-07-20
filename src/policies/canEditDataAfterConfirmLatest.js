const moment = require("moment");

module.exports = async (context, config, { strapi }) => {
  const dataGeneral = await strapi.entityService.findMany(
    "api::general.general"
  );
  const dataGuestFeedback = await strapi.entityService.findMany(
    "api::guest-feedback.guest-feedback"
  );

  if (dataGuestFeedback.canEditAfterConfirmLatest) return true;

  if (!dataGeneral.confirmLatest) return false;

  return moment()
    .subtract(1, "d")
    .isBefore(moment(dataGeneral.confirmLatest), "day");
};
