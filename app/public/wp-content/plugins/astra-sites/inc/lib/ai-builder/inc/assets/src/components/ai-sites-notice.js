import { __ } from '@wordpress/i18n';
import { LightningIcon } from '../ui/icons';
import { classNames } from '../helpers';

const AISitesNotice = ( { className, ...props } ) => {
	// handle not logged in case.

	if (
		typeof aiBuilderVars?.zip_plans !== 'object' ||
		aiBuilderVars?.show_zip_plan !== '1'
	) {
		return;
	}

	const { plan_data } = aiBuilderVars?.zip_plans;
	const {
		limit: { ai_sites_count },
		usage: { ai_sites_count: ai_sites_count_used },
		remaining: { ai_sites_count: ai_sites_count_remaining },
	} = plan_data;

	const showAISitesNotice = () => {
		// if only 1 AI Site is remaining
		if ( ai_sites_count_remaining === 1 ) {
			return true;
		}

		const usagePercentage = ( ai_sites_count_used / ai_sites_count ) * 100;

		if ( usagePercentage > 70 ) {
			return true;
		}

		return false;
	};

	return (
		<>
			{ showAISitesNotice() && (
				<div
					className={ classNames(
						'p-2.5 gap-1 border border-alert-error/30 bg-alert-error-bg rounded-md flex',
						className
					) }
					{ ...props }
				>
					<span className="self-center">
						<LightningIcon />
					</span>
					<div className="w-full flex gap-1 justify-between">
						<p className="text-body-text text-sm">
							<span className="font-semibold pr-1">
								{ __(
									'Your AI sites are about to finish.',
									'ai-builder'
								) }
							</span>
							{ __(
								'You can create more AI sites with add-ons.',
								'ai-builder'
							) }
						</p>
						<a
							href="https://app.zipwp.com/sites-pricing"
							target="_blank"
							rel="noreferrer"
							className="no-underline"
						>
							<div className="p-0 font-semibold  text-sm text-blue-crayola min-w-fit">
								{ __( 'Buy Add-ons', 'ai-builder' ) }
							</div>
						</a>
					</div>
				</div>
			) }
		</>
	);
};

export default AISitesNotice;
