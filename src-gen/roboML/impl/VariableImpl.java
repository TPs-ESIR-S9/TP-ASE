/**
 */
package roboML.impl;

import org.eclipse.emf.common.notify.Notification;

import org.eclipse.emf.ecore.EClass;

import org.eclipse.emf.ecore.impl.ENotificationImpl;
import org.eclipse.emf.ecore.impl.MinimalEObjectImpl;

import roboML.RMLObject;
import roboML.RoboMLPackage;
import roboML.Variable;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Variable</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link roboML.impl.VariableImpl#getVariableName <em>Variable Name</em>}</li>
 *   <li>{@link roboML.impl.VariableImpl#getVariableValue <em>Variable Value</em>}</li>
 * </ul>
 *
 * @generated
 */
public class VariableImpl extends MinimalEObjectImpl.Container implements Variable {
	/**
	 * The default value of the '{@link #getVariableName() <em>Variable Name</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getVariableName()
	 * @generated
	 * @ordered
	 */
	protected static final RMLObject VARIABLE_NAME_EDEFAULT = RMLObject.RML_INT;

	/**
	 * The cached value of the '{@link #getVariableName() <em>Variable Name</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getVariableName()
	 * @generated
	 * @ordered
	 */
	protected RMLObject variableName = VARIABLE_NAME_EDEFAULT;

	/**
	 * The default value of the '{@link #getVariableValue() <em>Variable Value</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getVariableValue()
	 * @generated
	 * @ordered
	 */
	protected static final RMLObject VARIABLE_VALUE_EDEFAULT = RMLObject.RML_INT;

	/**
	 * The cached value of the '{@link #getVariableValue() <em>Variable Value</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getVariableValue()
	 * @generated
	 * @ordered
	 */
	protected RMLObject variableValue = VARIABLE_VALUE_EDEFAULT;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected VariableImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return RoboMLPackage.Literals.VARIABLE;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public RMLObject getVariableName() {
		return variableName;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public void setVariableName(RMLObject newVariableName) {
		RMLObject oldVariableName = variableName;
		variableName = newVariableName == null ? VARIABLE_NAME_EDEFAULT : newVariableName;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, RoboMLPackage.VARIABLE__VARIABLE_NAME,
					oldVariableName, variableName));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public RMLObject getVariableValue() {
		return variableValue;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public void setVariableValue(RMLObject newVariableValue) {
		RMLObject oldVariableValue = variableValue;
		variableValue = newVariableValue == null ? VARIABLE_VALUE_EDEFAULT : newVariableValue;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, RoboMLPackage.VARIABLE__VARIABLE_VALUE,
					oldVariableValue, variableValue));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public Object eGet(int featureID, boolean resolve, boolean coreType) {
		switch (featureID) {
		case RoboMLPackage.VARIABLE__VARIABLE_NAME:
			return getVariableName();
		case RoboMLPackage.VARIABLE__VARIABLE_VALUE:
			return getVariableValue();
		}
		return super.eGet(featureID, resolve, coreType);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public void eSet(int featureID, Object newValue) {
		switch (featureID) {
		case RoboMLPackage.VARIABLE__VARIABLE_NAME:
			setVariableName((RMLObject) newValue);
			return;
		case RoboMLPackage.VARIABLE__VARIABLE_VALUE:
			setVariableValue((RMLObject) newValue);
			return;
		}
		super.eSet(featureID, newValue);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public void eUnset(int featureID) {
		switch (featureID) {
		case RoboMLPackage.VARIABLE__VARIABLE_NAME:
			setVariableName(VARIABLE_NAME_EDEFAULT);
			return;
		case RoboMLPackage.VARIABLE__VARIABLE_VALUE:
			setVariableValue(VARIABLE_VALUE_EDEFAULT);
			return;
		}
		super.eUnset(featureID);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public boolean eIsSet(int featureID) {
		switch (featureID) {
		case RoboMLPackage.VARIABLE__VARIABLE_NAME:
			return variableName != VARIABLE_NAME_EDEFAULT;
		case RoboMLPackage.VARIABLE__VARIABLE_VALUE:
			return variableValue != VARIABLE_VALUE_EDEFAULT;
		}
		return super.eIsSet(featureID);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public String toString() {
		if (eIsProxy())
			return super.toString();

		StringBuilder result = new StringBuilder(super.toString());
		result.append(" (variableName: ");
		result.append(variableName);
		result.append(", variableValue: ");
		result.append(variableValue);
		result.append(')');
		return result.toString();
	}

} //VariableImpl
