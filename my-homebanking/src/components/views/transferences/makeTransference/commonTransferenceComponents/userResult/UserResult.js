import React from 'react';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import {
	ParagraphMedium3,
	ParagraphSemibold2,
} from '../../../../../../theme/paragraph/paragraph';
import {
	ArrowIconOfUserResult,
	DataUser,
	UserImage,
	UserResultContainer,
} from './styleUserResult';

export const UserResult = ({ ...props }) => {
	return (
		<UserResultContainer
			removeBorder={props.removeBorder}
			removePadding={props.removePadding}
		>
			<UserImage src={`${props.userImage}`} />
			<DataUser>
				<ParagraphSemibold2>
					{props.name} {props.lastName}
				</ParagraphSemibold2>
				<ParagraphMedium3>{props.accountNumber}</ParagraphMedium3>
			</DataUser>
			<ArrowIconOfUserResult
				icon={faAngleRight}
				disableicon={props.disableicon}
			/>
		</UserResultContainer>
	);
};
