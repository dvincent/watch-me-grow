import cbtp from './cb-to-promise';
import cstp from './cognito-sync-to-promise';

/**
 * Returns a promise that gets a dataset from Amazon Cognito, syncs it and resolves with the result.
 */
export default function getDataSet(dataSetName, userService, $q) {
  return userService.init()
    .then(() => {
      const client = new AWS.CognitoSyncManager();
      return cbtp.call(client, $q, client.openOrCreateDataset, dataSetName)
    })
    .then(dataSet => cstp($q, dataSet))
    .then(({dataSet}) => dataSet)
}