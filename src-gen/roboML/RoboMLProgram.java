/**
 */
package roboML;

import org.eclipse.emf.common.util.EList;

import org.eclipse.emf.ecore.EObject;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Program</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link roboML.RoboMLProgram#getFunction <em>Function</em>}</li>
 * </ul>
 *
 * @see roboML.RoboMLPackage#getRoboMLProgram()
 * @model
 * @generated
 */
public interface RoboMLProgram extends EObject {
	/**
	 * Returns the value of the '<em><b>Function</b></em>' containment reference list.
	 * The list contents are of type {@link roboML.Function}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Function</em>' containment reference list.
	 * @see roboML.RoboMLPackage#getRoboMLProgram_Function()
	 * @model containment="true"
	 * @generated
	 */
	EList<Function> getFunction();

} // RoboMLProgram
