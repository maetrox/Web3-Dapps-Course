// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Demo {
	event Echo(string message);

	function echo(string calldata message) external {
		emit Echo(message);
	}
}
