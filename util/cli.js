import exec from '@actions/exec';

export default async function checkCLI() {
  try {
    await exec.exec('fastly', 'version')
  } catch (err) {
    throw "Fastly CLI is not installed. Use the fastly/compute-actions/setup action to automatically install and cache it.";
  }
}